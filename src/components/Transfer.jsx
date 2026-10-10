import { Plane, Car } from './Icons.jsx'

export default function Transfer() {
  return (
    <section id="transfers" className="transfer">
      <div className="container">
        <div className="transfer-banner" data-reveal="up">
          <div className="transfer-icons">
            <span className="icon-sq xl"><Plane /></span>
            <span className="icon-sq xl"><Car /></span>
          </div>
          <div className="transfer-text">
            <h3>Airport Transfers &amp;<br />Island Transport</h3>
            <p>Airport pickups, hotel transfers &amp; car transport across Zanzibar — arrive stress-free and get around</p>
          </div>
          <a href="#contact" className="btn-red">Arrange a Transfer</a>
        </div>
      </div>
    </section>
  )
}
