import Link from "next/link";

export default function PetsPage() {
  return (
    <div>
      <h3>Pets page</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolorem vel magnam tempore voluptates assumenda
        distinctio est ut nihil vero.
      </p>
      <Link href="/pets/elephant">Elephant</Link>
    </div>
  );
}
