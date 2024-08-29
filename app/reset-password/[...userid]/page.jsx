import ResetPasswordWrapper from "@/app/components/resetpassword/ResetPasswordWrapper";

const ResetPassword = ({ params }) => {
    const { userid } = params;
    const [uniqueId, userId] = userid;
    return (
        <>
            <ResetPasswordWrapper userId={userId} />
        </>
    );
};

export default ResetPassword;
