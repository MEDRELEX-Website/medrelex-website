import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo({ size = 30, href = "/" }: { size?: number; href?: string }) {
  return (
    <Link href={href} className={styles.logo} aria-label="MEDRELEX home">
      <Image src="/images/mark.png" alt="" width={size * 1.13} height={size} priority />
      <span className={`wordmark ${styles.word}`}>
        MEDRELE<span className={styles.x}>X</span>
      </span>
    </Link>
  );
}
