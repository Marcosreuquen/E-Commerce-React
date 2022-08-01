import { useTokenValue } from "hooks";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Loader } from "ui/loader";
import Swal from "sweetalert2";
import { apiCalls } from "lib/api";
import { useEffect } from "react";

const Checkout: NextPage = () => {
  const router = useRouter();
  const token = useTokenValue();
  const itemId = router.query.itemId as string;

  const handleBuy = async () => {
    if (!token) {
      router.replace("/signin");
    }

    try {
      const { newOrder } = await apiCalls.order.create({}, token, itemId);
      if (newOrder)
        router.replace(newOrder.paymentURL, newOrder.paymentURL, {
          shallow: true,
        });
      if (!newOrder) Swal.fire({ title: "Something failed", icon: "error" });
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    handleBuy();
  });

  return (
    <div style={{ paddingTop: 84 }}>
      <Loader />
    </div>
  );
};

export default Checkout;
