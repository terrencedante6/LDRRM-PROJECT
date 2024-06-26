import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "@/components/application/overview";
import { RecentSales } from "@/components/application/recent-sales";

const widgetsData = [
  {
    title: "Total Mobile Users",
    value: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M8 16.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z" />
        <path
          fill-rule="evenodd"
          d="M4 4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4Zm4-1.5v.75c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75V2.5h1A1.5 1.5 0 0 1 14.5 4v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 16V4A1.5 1.5 0 0 1 7 2.5h1Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Total requests",
    value: 50,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z" />
      </svg>
    ),
  },
  {
    title: "App Raiting & Feedback",
    value: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
        <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
      </svg>
    ),
  },
];

export default function Page() {
  return (
    <div className="w-full h-[805px] 2xl:h-[882px] flex justify-center place-items-center py-4">
      <div className="w-full h-full max-w-[1840px] flex justify-between gap-6">
        <div className="w-full h-full flex flex-col justify-between gap-6">
          <div className="w-full h-[30%] max-h-[35%] flex justify-between gap-6 ">
            {widgetsData.map((data, i) => (
              <Card key={i} className="w-full ">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {data.title}
                  </CardTitle>

                  {data.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{data.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="w-[100%] flex gap-4">
            <Card className="w-full h-fit flex flex-col">
              <CardHeader>
                <CardTitle>Activity Logs</CardTitle>
              </CardHeader>
              <CardContent className="w-full min-h-[508.5px] h-[508.5px] flex">
                {/* <Overview /> */}
              </CardContent>
            </Card>
            <Card className="w-[35%] min-h-[508.5px]">
              <CardHeader>
                <CardTitle>Employees</CardTitle>
                <CardDescription>People who are working</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// // Initialize Supabase client
// const supabaseUrl = "YOUR_SUPABASE_URL";
// const supabaseAnonKey = "YOUR_SUPABASE_ANON_KEY";
// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// export default function Page() {
//   const [totalMobileUsers, setTotalMobileUsers] = useState(0);

//   useEffect(() => {
//     const fetchTotalMobileUsers = async () => {
//       const { data, error } = await supabase
//         .from("mobile_users")
//         .select("*", { count: "exact" });

//       if (error) {
//         console.error("Error fetching total mobile users:", error);
//         return;
//       }

//       setTotalMobileUsers(data.length);
//     };

//     fetchTotalMobileUsers();
//   }, []);

//   return (
//     <div>
//       {/* Your existing component structure */}
//       <div>Total Mobile Users: {totalMobileUsers}</div>
//     </div>
//   );
// }
