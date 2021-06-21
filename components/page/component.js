
const PageLogin = styled.div` {
    background-image:url("/dist/images/login.jpg");
    background-position:center center;
    padding:7% 12%;
    background-repeat:no-repeat; 
    background-attachment:fixed;       
   -webkit-background-origin:cover;
   -moz-background-size:cover;
   -o-background-size:cover;
    background-size:cover;
    width:100%;
    height:100vh;
    
    .login-card {
        overflow:hidden;
        background-color:rgba(150, 150, 141, 0.48);
        width:420px;
        padding:21px 14px;        

        @media(max-width:${size.mobileL}) {
            width:95%;
            padding:1px;    
        }        

        .login-card-description {
            font-size:25px;
            color:#000;
            font-weight:normal;
            margin-bottom:23px;
        }
        
        .form-control {
            border:1px solid #d5dae2;
            padding:15px 25px;
            margin-bottom:20px;
            min-height:45px;
            font-size:13px;
            //line-height:15;
            font-weight:normal;
            
            &::placeholder {
                color:#919aa3;
            }
        }
        
        .login-btn {
            padding:13px 20px 12px;
            background-color:#000;
            border-radius:4px;
            font-size:17px;
            font-weight:bold;
            line-height:20px;
            color:#fff;
            margin-bottom:24px;
            
            &:hover {
                border:1px solid #000;
                background-color:transparent;
                color:#000;
            }
        }
        
        .forgot-password-link {
            font-size:14px;
            color:#082f58;
            margin-bottom:12px;
        }
        .login-card-footer-text a, .login-card-footer-nav a, .text-reset{
            font-size:14px;
            color:#082f58;
            
        }
        
        &-footer-text {
            font-size:16px;
            color:#0d2366;
            margin-bottom:60px;
            
            @media(max-width:767px) {
                margin-bottom:24px;
            }
        }
        
        &-footer-nav {
            a {
                font-size:14px;
                color:#919aa3;
            }
        }
    }
}
}`




function Login() {
    return <PageLogin>
        <div class="login-card" >
            <p class="login-card-description">Sign into your account</p>
            <form action="#!">
                <div class="form-group">
                    <label for="email" class="sr-only">Email</label>
                    <input type="email" name="email" id="email" class="form-control"
                        placeholder="Email address"></input>
                </div>
                <div class="form-group mb-4">
                    <label for="password" class="sr-only">Password</label>
                    <input type="password" name="password" id="password" class="form-control"
                        placeholder="***********"></input>
                </div>
                <input name="login" id="login" class="btn btn-block login-btn mb-4" type="button"
                    value="Login"></input>
            </form>
            <a href="#!" class="forgot-password-link">Forgot password?</a>
            <p class="login-card-footer-text">Don't have an account?
              <a href="#!" class="text-reset">Register here</a></p>
        </div>

    </PageLogin >


}