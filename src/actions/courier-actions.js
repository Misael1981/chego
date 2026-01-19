"use server";

export async function approveCourier(courierId) {
  console.log("Aprovar entregador:", courierId);
}

export async function rejectCourier(courierId) {
  console.log("Rejeitar entregador:", courierId);
}
