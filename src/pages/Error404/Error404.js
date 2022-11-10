import "./Error404.css";

function Error() {
  return (
    <div className="sportsee-error">
      <h1 className="error-title">404</h1>
      <span className="error-description">
        Service momentanément indisponible <br />
        <br />
        Impossible de récupérer les données via l'API SportSee.
      </span>
    </div>
  );
}
export default Error;
