class ZurCartList extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { cartlist: this.props.cartlist }
    //     this.addItem = this.addItem.bind(this);
    // }

    // setInit(_cartlist) {
    //     let _cartState = (IsNull(this.state) || IsNull(this.state.cartlist)) ? {} : this.state.cartlist;
    //     if (IsNull(_cartlist))
    //         return;
    //     _cartlist.title = (IsNotNull(_cartlist.title)) ? _cartlist.title : _cartState.title;
    //     _cartlist.grid = (IsNotNull(_cartlist.grid)) ? _cartlist.grid : _cartState.grid;
    //     _cartlist.event = (IsNotNull(_cartlist.event)) ? _cartlist.event : _cartState.event;
    //     this.setState({ cartlist: _cartlist });
    // }

    // componentWillReceiveProps(props) {
    //     this.setInit(props.cartlist);
    // }

    // shouldComponentUpdate() {
    //     return true;
    // }
    // addItem() {
    //     this.state.cartlist.event.add();
    // }
    render() {
        return (
            <div className="content-wrapper">
                <div className="content">
                    <div className="Container p-3">
                        <div className="row">

                            <div className="col-md-12">
                                <div className="card card-prirary cardutline direct-chat direct-chat-primary">
                                    <div className="card-header">
                                        <h3 className="card-title">{this.propscartTitle}</h3>
                                        <div className="card-tools">
                                            <button type="button" onClick={this.props.evenAdd} className="btn btn-info btn-sm bt"><i className="fas fa-plus"></i>
                                                <span>جدید  </span> </button>
                                        </div>
                                    </div>
                                    <div className="card-body">

                                        <ZurTable
                                            evenEdit={this.props.evenEdit}
                                            evenAdd={this.props.evenAdd}
                                            evenEdit={this.props.evenEdit}
                                            evenDelete={this.props.evenDelete}
                                            ApiGetData={this.props.ApiGetData}
                                            paging={this.props.paging}
                                            columns={this.props.columns}
                                        />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )

    }
}

