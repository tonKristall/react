import React from "react";
import "./header.scss";

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <ul>
        <li>
          <a className="link link__active" href="/">
            home
          </a>
        </li>
        <li>
          <a className="link" href="/about">
            about
          </a>
        </li>
      </ul>
    </header>
  );
}
