"use cliente";
import React, { use, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface FormData{
    name: string;
    email: string;
    password: string;
};

export default function registerPage(): JSX.Element {
    const[form, setForm] = useState<FormData>({ name: "", email: "", password: ""});
}