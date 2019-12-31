import { useRouter } from "next/router";
import MasterLayout from "../../share/layout/Master";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MasterLayout>
      <h1>{id}</h1>
    </MasterLayout>
  );
};
