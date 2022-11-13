import "./Error404.css";

function Error() {
  return (
    <div className="sportsee-error">
      <h1 className="error-title">404</h1>
      <span className="error-description">
        Impossible de récupérer les données de l'API SportSee.
      </span>
    </div>
  );
}
export default Error;
