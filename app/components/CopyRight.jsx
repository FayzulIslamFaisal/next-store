function CopyRight({ copyrightText = "All Rights Reserved nagadhat.com.bd" }) {
    return (
        <div className="row copyright-area">
            <div className="col-md-12 text-center">
                <p className="text-white">&copy; {copyrightText}</p>
            </div>
        </div>
    );
}

export default CopyRight;
