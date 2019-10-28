class Order {
  constructor(id, orgId, title, imageUrl, appointment, status) {
    this.id = id;
    this.orgId = orgId;
    this.imageUrl = imageUrl;
    this.title = title;
    this.appointment = appointment;
    this.status = status;
  }
}

export default Order;
