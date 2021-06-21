class ZurNotification extends React.Component {
    createNotification = (type, msg, title) => {
        switch (type) {
            case "success":

                break;
            case "danger":
            case "error":
                type = "danger"
                break;
            case "info":
                break;
            case "default":
                break;
            case "warning":
                break;
            default:
                type = "info";
                break
        }
        $('.toast').toast('show');

        // store.addNotification({
        //     title: title,
        //     message: "teodosii@react-notifications-component",
        //     type: type,
        //     insert: "top",
        //     container: "bottom-right", // top-left // top-right // top-center // center // bottom-left // bottom-right // bottom-center
        //     animationIn: ["animate__animated", "animate__fadeIn"],
        //     animationOut: ["animate__animated", "animate__fadeOut"],
        //     dismiss: {
        //         duration: 5000,
        //         pauseOnHover: true
        //         // onScreen: true
        //     }
        // });
    };

    render() {
        return (
            <div class="container">
                <h3>Toast Example</h3>
                <p>In this example, we use data-autohide="false" to show the toast by default. You can close it by clicking on the close (x) icon inside the toast header.</p>

                <div class="toast" data-autohide="false">
                    <div class="toast-header">
                        <strong class="mr-auto text-primary">Toast Header</strong>
                        <small class="text-muted">5 mins ago</small>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
                    </div>
                    <div class="toast-body">
                        Some text inside the toast body
    </div>
                </div>
            </div>

            // <div>
            //     <div class="toast">
            //         <div class="toast-header">   Toast Header  </div>
            //         <div class="toast-body">    Some text inside the toast body  </div>
            //     </div>
            //     <button className='btn btn-info'
            //         onClick={(e) => { this.createNotification('info', e) }} >
            //         Info        </button>
            //     <hr />
            //     <button className='btn btn-success'
            //         onClick={(e) => { this.createNotification('success', e) }} >
            //         Success        </button>
            //     <hr />
            //     <button className='btn btn-warning'
            //         onClick={(e) => { this.createNotification('warning', e) }} >
            //         Warning        </button>
            //     <hr />
            //     <button className='btn btn-danger' onClick={(e) => { this.createNotification('error', e) }}                >

            //     </button>
            //            </div >
        );
    }
}
