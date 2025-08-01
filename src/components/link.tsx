import Link from "next/link";
import React from "react";

type Link = { name: string; href: string };

const link = ({ name, href }: Link) => <Link href={href}>{name}</Link>;

export default link;
