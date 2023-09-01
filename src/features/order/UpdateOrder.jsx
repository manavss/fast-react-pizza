/* eslint-disable react/prop-types */
import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  //   console.log(fetcher);
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
export async function action({ request, params }) {
  console.log(request, params);
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
