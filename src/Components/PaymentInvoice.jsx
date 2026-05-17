import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  box: {
    marginBottom: 10,
  },
});

const PaymentInvoice = ({ payment }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Payment Invoice</Text>

        <View style={styles.box}>
          <Text>Name: {payment.customerName}</Text>
        </View>

        <View style={styles.box}>
          <Text>Email: {payment.customerEmail}</Text>
        </View>

        <View style={styles.box}>
          <Text>Amount: {payment.amount}tk</Text>
        </View>

        <View style={styles.box}>
          <Text>Transaction ID: {payment.transactionId}</Text>
        </View>

        <View style={styles.box}>
          <Text>Status: {payment.paymentStatus}</Text>
        </View>

        <View style={styles.box}>
          <Text>Date: {new Date(payment.createdAt).toLocaleString()}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PaymentInvoice;
