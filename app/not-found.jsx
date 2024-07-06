import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <section className="not-found-page-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex gap-5 justify-content-center align-items-center flex-1 not-found-page flex-column flex-md-row">
                        <div className="not-found-page-text-holder">
                            <h1>404</h1>
                            <p>Page Not Found</p>
                            <Link href={`/`} className="add-to-cart-link border-0 px-4">Go Back</Link>
                        </div>
                        <div className="not-found-page-img-area">
                          <div className="not-found-img">
                            <Image fill className="img-fluid" src="/images/falling-man.gif" alt="not-found-page-img"/>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default NotFound;
