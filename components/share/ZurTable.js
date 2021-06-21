class ZurTable extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            isLoaded: false,
            grid: {
                dataSource: [],
                columns: this.props.columns || [],
                paging: this.props.paging || {}
            }
        }
        this.filterList = this.filterList.bind(this);
        this.sortBy = this.sortBy.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.getdata();
    }

    filterList = (h, event) => {
        let _grid = this.state.grid;
        _grid.columns = _grid.columns.map((x) => {
            if (x.title == h.title && x.filterValue != event.target.value) {
                x.filterValue = event.target.value;
            }
            return x;
        })
        this.setState({ grid: _grid });

    }
    keyPress(h, e) {
        if (e.keyCode === 13 & e.target.value.length >= 0) {
            this.getdata();
        }
    }
    getdata() {
        let that = this;
        let g = this.state.grid;
        g.dataSource = [];
        that.setState({
            isLoaded: false,
        });
        http.post(this.props.ApiGetData, g)
            .then(
                (result) => {
                    if (result.data != null)
                        that.setState({
                            grid: result.data,
                            isLoaded: true,
                        });
                })
            .catch((error) => {
                console.log("error", error)
            })

    }

    nextPage = (paging) => {
        this.getdata();
        let _grid = this.state.grid;
        _grid.paging = paging;
        this.setState({ grid: _grid });
        this.getdata();
    }
    sortBy(key) {
        debugger;
        let _grid = this.state.grid;
        _grid.columns = _grid.columns.map((x) => {
            if (x.field == key) {
                if (x.sortType === 0)
                    x.sortType = 1;
                else if (x.sortType === 1)
                    x.sortType = 2;
                else if (x.sortType === 2)
                    x.sortType = 1;

            }
            return x;
        });
        this.setState({ grid: _grid });
        this.getdata();
    }


    render() {
        if (this.state.isLoaded)
            return (
                <div>
                    <table className="zurTable table table-bordered table-hover">
                        <thead>
                            {
                                this.state.grid.columns.map((h) => {
                                    let th = [];
                                    if (h.hasSort) {
                                        th.push(<i onClick={(e) => { this.sortBy(h.field) }} className="fa zur-sort"></i>)
                                    }
                                    if (h.hasFilter) {
                                        th.push(<input type="text"
                                            placeholder={h.title}
                                            onKeyDown={this.keyPress.bind(this, h)}
                                            onChange={this.filterList.bind(this, h)}
                                            value={h.filterValue}
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
                                this.state.grid.dataSource
                                    .map((row, index) => {
                                        return (
                                            <tr key={row.id}>
                                                {
                                                    this.state.grid.columns
                                                        .map((h) => {
                                                            return (<td>{row[h.fieldDisplay]} </td>)
                                                        })}
                                                <td>
                                                    <div className="tools">
                                                        <button type="button"
                                                            onClick={(e) => { this.props.evenEdit(row, e) }}
                                                            className="btn btn-outline-success btn-sm btn-add">
                                                            <i className="fa fa-edit"></i>
                                                        </button>

                                                        <button type="button"
                                                            onClick={(e) => { this.props.evenDelete(row, e) }}
                                                            className="btn btn-outline-danger btn-sm btn-add">
                                                            <i className="fa fa-trash"></i>
                                                        </button></div>
                                                </td>

                                            </tr>
                                        )
                                    })
                            }
                        </tbody>
                    </table>
                    <ZurPagination paging={this.state.grid.paging} nextPage={this.nextPage} />
                </div >
            )
        else
            return <Loader />

    }
}

