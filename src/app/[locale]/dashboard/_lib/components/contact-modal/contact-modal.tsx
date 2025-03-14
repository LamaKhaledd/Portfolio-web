import { Modal, Grid, GridCol } from "@mantine/core";
import PortfolioButton from "@components/button/portfolio-button";
import InputRenderer from "@InputRenderer/portfolio-inputs-renderer";
import { CONTACT_FORM_SCHEMA } from "@dashboard/utils/contact-schema";

const ContactModal: React.FC<ContactModalProps> = ({ opened, onClose }) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Please enter your information:"
    >
      <Grid mb="lg">
        {CONTACT_FORM_SCHEMA.map((schema) => (
          <GridCol key={schema.name}>
            <InputRenderer schema={schema} />
          </GridCol>
        ))}
      </Grid>

      <PortfolioButton
        onClick={onClose}
        schema={{
          fullWidth: true,
          size: "compact-lg",
          variant: "outline",
        }}
      >
        Send Message
      </PortfolioButton>
    </Modal>
  );
};

export default ContactModal;
