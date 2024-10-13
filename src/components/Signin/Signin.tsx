"use client"
import styles from "./Signin.module.css"
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/hooks/hooks";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {getTokens, getUser} from "@/store/features/userSlice";

function Signin() {
    const error = useAppSelector((state) => state.user.error);
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    });

    const onChangedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setInputValue({...inputValue, [name]: value});
    };

    const handleSignin = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            if (!inputValue.email || !inputValue.password) {
                alert('Введите данные для входа');
                return;
            }
            await dispatch(getUser(inputValue)).unwrap()
            await dispatch(getTokens(inputValue)).unwrap()
            router.push("/tracks");
        } catch (error: unknown) {
            console.error("error");
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.containerEnter}>
                <div className={styles.modalBlock}>
                    <form action="#" className={styles.modalFormLogin}>
                        <Link href="/tracks">
                            <div className={styles.modalLogo}>
                                <Image
                                    alt="logo"
                                    src="/img/logo_modal.png"
                                    width={140}
                                    height={21}
                                />
                            </div>
                        </Link>
                        <input
                            onChange={onChangedInput}
                            className={classNames(styles.modalInput, styles.login)}
                            value={inputValue.email}
                            name="email"
                            placeholder="Почта"
                            type="text"
                        />
                        <input
                            onChange={onChangedInput}
                            className={styles.modalInput}
                            value={inputValue.password}
                            name="password"
                            placeholder="Пароль"
                            type="password"
                        />
                        <p className={styles.error}>{error}</p>
                        <button
                            onClick={handleSignin}
                            className={classNames(
                                styles.modalBtnEnter,
                                styles.modalBtnEnterText
                            )}
                        >
                            <span>Войти</span>
                        </button>
                        <Link className={styles.modalBtnSignup} href="/signup">
                            Зарегистрироваться
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signin