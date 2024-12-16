import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:grid sm:grid-cols-2 gap-y-8 border-t border-s-offwhite p-8 gap-x-28">
      <Newsletter />
      <div className="flex  gap-8 px-8 flex-row">
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
