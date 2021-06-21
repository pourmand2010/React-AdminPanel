class ZurTableSortFilter extends React.Component {
    constructor(props) {
        super(props);
        if (typeof (this.props.option) === "undefined") {
            console.log("لطفا داده های جدول را مشخص کنید");
            return;
        }
        if (typeof (this.props.option.serverData) === "undefined") {
            console.log("لطفا داده های جدول را مشخص کنید")
            return;

        }
        if (typeof (this.props.option.header) === "undefined") {
            console.log("لطفا عنوان داده های جدول را مشخص کنید")
            return;

        }
        this.state = {
            serverData: this.props.option.serverData || [],
            header: this.props.option.header || {},
            editItem: this.props.option.edit,
            deleteItem: this.props.option.delete
        };

        Array.prototype.sortBy = function (key, IsAsc = true) {
            return this.slice(0).sort(function (a, b) {
                if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                    console.log("property doesn't exist on either object");
                    return 0;
                }

                const varA = (typeof a[key] === 'string')
                    ? a[key].toUpperCase() : a[key];
                const varB = (typeof b[key] === 'string')
                    ? b[key].toUpperCase() : b[key];

                let comparison = 0;
                if (varA > varB) {
                    comparison = 1;
                } else if (varA < varB) {
                    comparison = -1;
                }
                return (
                    (IsAsc) ? (comparison * -1) : comparison
                );
            });
        }

        this.state.sortOrder = [];

        var list = this.state.serverData;
        this.state.header.filter(h => h.hasSort)
            .map(h => h.title).forEach(s => {
                list = list.sortBy(s);
                this.state.sortOrder.push({ key: s, IsAsc: true });
            });
        this.filterList = this.filterList.bind(this);
        this.state.dataTable = list;
    }


    sortBy(key) {
        let finditem = (this.state.sortOrder.find(x => x.key.includes(key)));
        finditem.IsAsc = !finditem.IsAsc;
        var list = this.state.dataTable.sortBy(key, finditem.IsAsc);
        this.setState({ dataTable: list });
        this.setState({ sortOrder: this.state.sortOrder });
    }


    filterList = (h, event) => {
        var listheader = this.state.header.map((x) => {
            if (x.title == h.title)
                x.filterValue = event.target.value;
            return x;
        })
        this.setState({ header: listheader });
        var list = [];
        var filterlist = this.state.header.filter(h => typeof (h.filterValue) != "undefined" && h.filterValue != "");
        if (filterlist.length != 0) {
            this.state.serverData.forEach(row => {
                var find = true;
                filterlist.forEach(h => {
                    find = find && (row[h.col].toLowerCase().includes(h.filterValue.toLowerCase()) == true);
                });
                if (find)
                    list.push(row);
            });
        }
        else
            list = this.state.serverData;
        this.setState({ dataTable: list });

    }
    editItem(item, event) {
        this.state.editItem(item);
    }
    deleteItem(item, event) {
        this.state.deleteItem(item);
    }
    render() {
        return (
            <div>
                <br />
                <table className="zurTable table table-bordered table-hover">
                    <thead>
                        {
                            this.state.header.map((h) => {
                                let th = [];
                                if (h.hasSort) {
                                    th.push(<i onClick={(e) => { this.sortBy(h.title) }} className="fa zur-sort"></i>)
                                }
                                if (h.hasFilter) {
                                    th.push(<input type="text"
                                        placeholder={h.title}
                                        onChange={this.filterList.bind(this, h)}
                                    />)
                                }
                                else {
                                    th.push(h.title)
                                }
                                return <th>{th}</th>;
                            })}
                        <th></th>
                    </thead>
                    <tbody>

                        {
                            this.state.dataTable
                                .map((row, index) => {
                                    return (
                                        <tr key={row.id}>
                                            {
                                                this.state.header
                                                    .map((h) => {
                                                        return (<td>{row[h.col]} </td>)
                                                    })}
                                            <td>
                                                <div className="tools">
                                                    <button type="button" onClick={(e) => { this.editItem(row, e) }} className="btn btn-outline-success btn-sm btn-add">
                                                        <i className="fa fa-edit"></i>
                                                    </button>

                                                    <button type="button" onClick={(e) => { this.deleteItem(row, e) }} className="btn btn-outline-danger btn-sm btn-add">
                                                        <i className="fa fa-trash"></i>
                                                    </button></div>
                                            </td>

                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

