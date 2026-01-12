export async function createCourierIfNotExists(userId, data) {
  const courier = await db.courier.findUnique({
    where: { userId },
  });

  if (courier) return courier;

  return db.courier.create({
    data: {
      userId,
      name: data.name,
      phone: data.phone,
    },
  });
}
