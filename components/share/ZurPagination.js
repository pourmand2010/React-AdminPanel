class ZurPagination extends React.Component {
    constructor(props) {
        super(props)
        let _paging = this.setInit(this.props.paging);
        this.state = { paging: _paging }
    }

    setInit(_paging) {
        if (!_paging.totalCount)
            _paging.totalCount = 100;
        if (!_paging.count)
            _paging.count = 20;

        if (!_paging.pageNumber)
            _paging.pageNumber = 1;

        if (!_paging.pageSizes)
            _paging.pageSizes = [2, 50, 100, 200];

        _paging.lastNumberOfPage = Math.ceil(_paging.totalCount / _paging.count);
        this.setState({ paging: _paging });
        return _paging;
    }

    componentWillReceiveProps(props) {
        this.setInit(props.paging);
    }

    shouldComponentUpdate() {
        return true;
    }

    nextPage() {
        if (typeof (this.props.nextPage) !== "function")
            console.log("Please set Function nextPage");
        this.props.nextPage(this.state.paging);
    }

    changePage(page) {
        if (page > this.state.paging.lastNumberOfPage || page < 1) {
            return;
        }
        let _paging = this.state.paging;
        _paging.pageNumber = page;
        this.setState({ paging: _paging });
        this.nextPage();
    }

    changeCount(count) {
        let _paging = this.state.paging;
        _paging.count = count;
        _paging.pageNumber = 1;
        this.setState({ paging: _paging });
        this.nextPage();
    }

    createList() {
        let list = [];
        for (let i = 1; i <= this.state.paging.lastNumberOfPage; i++) {
            list.push(<li className={"pagination-item" + (i == this.state.paging.pageNumber ? ' is-active' : '')}>
                <a className="pagination-link" onClick={(e) => { this.changePage(i) }}>{i}</a> </li>)
        }
        return list;
    }

    render() {
        return <div className="row">
            <div className="col-sm-8">
                <div className="pagination-container">
                    <ul className="pagination">
                        <li className="pagination-item--wide last">

                            <a className={"pagination-link--wide" + (1 == this.state.paging.pageNumber ? ' disabled' : '')}
                                onClick={(e) => this.changePage(this.state.paging.pageNumber - 1)}>
                                <i className="fa fa-angle-right"></i>       </a>
                        </li>
                        {this.createList()}

                        <li className="pagination-item--wide first">

                            <a className={"pagination-link--wide" + (this.state.paging.lastNumberOfPage == this.state.paging.pageNumber ? ' disabled' : '')}
                                onClick={(e) => this.changePage(this.state.paging.pageNumber + 1)}>
                                <i className="fa fa-angle-left"></i>        </a>
                        </li>

                    </ul>

                </div>
            </div>
            <div className="col-sm-4 pagination-row-number">

                <span> تعداد نمایش در صفحه   </span>

                <div className="btn-group">

                    <div className="dropdown">
                        <button type="button" className="btn btn-outline-dark btn-sm dropdown-toggle" data-toggle="dropdown">
                            <span className="d-none d-xl-inline-block ml-2 mr-1">{this.state.paging.count} </span>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            {
                                this.state.paging.pageSizes.map(x => {
                                    return <a className="dropdown-item" onClick={(e) => this.changeCount(x, e)} >{x}</a>
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>

            ;
    }
}