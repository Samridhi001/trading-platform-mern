import { Link } from "react-router-dom";

function Stats() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <h2 className="mb-4">Built on trust and transparency</h2>

          <h5>Customer-first approach</h5>
          <p className="text-muted">
            Millions of users rely on our platform to manage and grow their
            investments with confidence and clarity.
          </p>

          <h5>No spam. No distractions.</h5>
          <p className="text-muted">
            We focus on clean design and meaningful features instead of
            notifications, gimmicks, or unnecessary alerts.
          </p>

          <h5>An expanding ecosystem</h5>
          <p className="text-muted">
            From trading tools to learning resources, we’re building an
            ecosystem that supports every stage of your investing journey.
          </p>

          <h5>Helping you invest better</h5>
          <p className="text-muted">
            Risk controls, insights, and educational tools are designed to help
            you make smarter financial decisions.
          </p>
        </div>

        <div className="col-md-6 text-center">
          <img
            src="/images/ecosystem.jpg"
            alt="Platform ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "90%" }}
          />
          <div className="border rounded p-4">
            <h4 className="fw-bold mb-3">Explore the platform</h4>

            <Link to="/products" className="d-block mb-2 text-decoration-none">
              View products →
            </Link>

            <Link to="/demo" className="text-decoration-none">
              Try demo →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
