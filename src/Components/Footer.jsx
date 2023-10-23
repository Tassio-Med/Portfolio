function Footer() {
  return (
    <div>
      <footer className="w-full rounded-lg shadow md:px-6 md:py-6">
        <hr className="my-6 border-50 border-slate-50 border-opacity-[50%]" />
        <span
          className="block text-sm text-center text-slate-50 text-opacity-[50%] sm:text-center"
        >
          © 2022
          <a
            href="https://www.linkedin.com/in/tassiomed98"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Tássio M.
          </a>
          All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}

export default Footer;
