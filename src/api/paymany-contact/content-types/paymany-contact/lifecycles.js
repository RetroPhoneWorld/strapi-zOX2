module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const firstName = result.firstName;
    const lastName = result.lasttName;
    const email = result.email;
    const message = result.message;
    const amount = result.amount;

    try {
      await strapi.plugins["email-designer"].services.email.sendTemplatedEmail(
        {
          to: email,
          from: "noreply@smart-card.io",
        },
        {
          templateReferenceId: 1,
          subject: `Anfeed Contact`,
        },
        {
          name: name,
        }
      );
      await strapi.plugins["email"].services.email.send({
        to: "attila2000.03.05@gmail.com",
        from: "noreply@smart-card.io",
        subject: "Contact",
        html: `
          Name: ${firstName + lastName}<br>
          Donated: ${amount} <br>
          <p>
             ${message}
          </p>
          `,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
