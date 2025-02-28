import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="MoveSmart Company Admin"
        description="This is Yitegere webapp for company admins to control and manage the buses and tickets"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />
        </div>

        <div className="col-span-12 xl:col-span-5">
          {/* <MonthlyTarget /> */}
        </div>

      
        <div className="col-span-12 xl:col-span-5">
          <StatisticsChart
            title="Monthly Sales"
            series={[
              {
                name: "Clients",
                data: [
                  100, 210, 214, 216, 216, 225, 220, 205, 230, 210, 240, 235,
                ],
              },
              {
                name: "Revenue",
                data: [
                  50, 150, 170, 190, 200, 210, 230, 240, 260, 250, 270, 300,
                ],
              },
            ]}
          />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <StatisticsChart
            title="Monthly Sales"
            series={[
              {
                name: "Clients",
                data: [
                  100, 210, 214, 216, 216, 225, 220, 205, 230, 210, 240, 235,
                ],
              },
              {
                name: "Revenue",
                data: [
                  50, 150, 170, 190, 200, 210, 230, 240, 260, 250, 270, 300,
                ],
              },
            ]}
          />
        </div>

        <div className="col-span-12 ">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
