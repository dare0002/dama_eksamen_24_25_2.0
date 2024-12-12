import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2">
      <Newsletter />
      <div className="flex">
        <article>
          <h3>Contact us.</h3>
          <p>+45 46 46 00 00</p>
          <p>kea@kea.dk</p>
        </article>
        <article>
          <h3>Find us.</h3>
          <p>Guldbergsgade 29N</p>
          <p>2200 København</p>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
