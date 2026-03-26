import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Global loading bar — shows during loader fetches */}
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-blue-500 animate-pulse" />
      )}

      <main className="flex-1 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}