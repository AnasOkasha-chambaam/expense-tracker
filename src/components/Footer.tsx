import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Built with ❤️ by{" "}
          <a
            href="https://anas-okasha-next-portfolio-anasites-projects.vercel.app/"
            className="text-primary brightness-75 dark:brightness-150 hover:underline"
          >
            Anas Okasha
          </a>
          .
        </p>
        <p className="text-xs mt-2">
          Dear Hiring Team, I hope you enjoy exploring this application!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
