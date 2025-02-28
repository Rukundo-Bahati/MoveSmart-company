import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="MoveSmart Company Admin"
        description="This is Yitegere webapp for company admins to control and manage the buses and tickets"
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
