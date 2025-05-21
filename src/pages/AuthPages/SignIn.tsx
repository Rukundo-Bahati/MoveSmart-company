import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="MoveSmart Company Admin"
        description="This is MoveSmart webapp for company admins to control and manage the buses and tickets"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
