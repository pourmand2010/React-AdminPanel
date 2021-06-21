const NAME = 'Treeview'
const DATA_KEY = 'lte.treeview'
const EVENT_KEY = `.${DATA_KEY}`
const JQUERY_NO_CONFLICT = $.fn[NAME]

const Event = {
    SELECTED: `selected${EVENT_KEY}`,
    EXPANDED: `expanded${EVENT_KEY}`,
    COLLAPSED: `collapsed${EVENT_KEY}`,
    LOAD_DATA_API: `load${EVENT_KEY}`
}

const Selector = {
    LI: '.nav-item',
    LINK: '.nav-link',
    TREEVIEW_MENU: '.nav-treeview',
    OPEN: '.menu-open',
    DATA_WIDGET: '[data-widget="treeview"]'
}

const ClassName = {
    LI: 'nav-item',
    LINK: 'nav-link',
    TREEVIEW_MENU: 'nav-treeview',
    OPEN: 'menu-open',
    SIDEBAR_COLLAPSED: 'sidebar-collapse'
}
const _config = {
    trigger: Selector.DATA_WIDGET + " " + Selector.LINK,
    animationSpeed: 300,
    accordion: true,
    expandSidebar: false,
    sidebarButtonSelector: '[data-widget="pushmenu"]'
};


function _expandSidebar() {
    if ($('body').hasClass(ClassName.SIDEBAR_COLLAPSED)) {
        $(_config.sidebarButtonSelector).PushMenu('expand');
    }
} // Static

function expand(treeviewMenu, parentLi) {
    const expandedEvent = $.Event(Event.EXPANDED)
    if (_config.accordion) {
        const openMenuLi = parentLi.siblings(Selector.OPEN).first()
        const openTreeview = openMenuLi.find(Selector.TREEVIEW_MENU).first()
        collapse(openTreeview, openMenuLi)
    }

    treeviewMenu.stop().slideDown(_config.animationSpeed, () => {
        parentLi.addClass(ClassName.OPEN)
        $(this).trigger(expandedEvent);
    })
}


function collapse(treeviewMenu, parentLi) {
    const collapsedEvent = $.Event(Event.COLLAPSED)
    const expandedEvent = $.Event(Event.EXPANDED)
    treeviewMenu.stop().slideUp(_config.animationSpeed, () => {
        parentLi.removeClass(ClassName.OPEN)
        $(this).trigger(expandedEvent)
        treeviewMenu.find(`${Selector.OPEN} > ${Selector.TREEVIEW_MENU}`).slideUp()
        treeviewMenu.find(Selector.OPEN).removeClass(ClassName.OPEN)
    })
}


function toggle(event) {
    const $relativeTarget = $(event.currentTarget)
    const $parent = $relativeTarget.parent()

    let treeviewMenu = $parent.find('> ' + Selector.TREEVIEW_MENU)

    if (!treeviewMenu.is(Selector.TREEVIEW_MENU)) {

        if (!$parent.is(Selector.LI)) {
            treeviewMenu = $parent.parent().find('> ' + Selector.TREEVIEW_MENU)
        }

        if (!treeviewMenu.is(Selector.TREEVIEW_MENU)) {
            return
        }
    }

    event.preventDefault()

    const parentLi = $relativeTarget.parents(Selector.LI).first()
    const isOpen = parentLi.hasClass(ClassName.OPEN)

    if (isOpen) {
        collapse($(treeviewMenu), parentLi)
    } else {
        expand($(treeviewMenu), parentLi)
    }
}