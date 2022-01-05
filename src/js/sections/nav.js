

const nav = () => {
    return (
        <header>
    <div class="navigationa-bar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active"> <a class="nav-link" href="index.html">home <span class="sr-only">(current)</span></a> </li>
                        <li class="nav-item"> <a class="nav-link" href="fashion.html">fashion</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="photoshotting.html">photoshooting</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="photography.html">photography</a> </li>
                        <li class="nav-item"> <a class="nav-link" href="editor-choice.html">editors choice</a> </li>
                        <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">page</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown"> <a class="dropdown-item" href="index.html">Sample page</a> <a class="dropdown-item" href="contact.html">contact</a> <a class="dropdown-item" href="contact.html">about us</a> </div>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"> <a class="nav-link" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a> </li>
                        <li class="nav-item"> <a class="nav-link" href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a> </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <div class="logo pb-50">
        <div class="container">
            <div class="logo-inner">
                <a href="index.html"><img class="img-responsive" src="asset/image/logo/logo.png" alt="" data-toggle="tooltip" data-placement="top" title="BRIXTON"></a>
            </div>
        </div>
    </div>
</header>
    )
}

export default nav

