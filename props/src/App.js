import { useState } from "react";
import MembershipList from "./components/MembershipList";
import MembershipForm from "./components/MembershipForm";
function App() {
  const [memberships, setMemberships] = useState([
    {
      membershipCode: "SLVR",
      title: "Silver",
      description: "Customer Accumulating $100 spent enjoy 2% discount",
    },
    {
      membershipCode: "GLD",
      title: "Gold",
      description: "Customer Accumulating $500 spent enjoy 5% discount",
    },
    {
      membershipCode: "PLTNM",
      title: "Platinum",
      description: "Customer Accumulating $1000 spent enjoy 10% discount",
    },
  ]);

  const [appState, setAppState] = useState("ListMembership");

  const addMembershipHandler = (newMembership) => {
    setAppState("ListMembership");
    setMemberships((prevMemberships) => {
      return prevMemberships.concat(newMembership);
    });
  };

  let displayMembership;

  switch (appState) {
    case "AddMembership":
      displayMembership = (
        <MembershipForm
          onAddMembership={addMembershipHandler}
          onCancel={() => setAppState("ListMembership")}
        />
      );
      break;
    default:
      displayMembership = (
        <>
          <button onClick={() => setAppState("AddMembership")}>
            Add Membership
          </button>
          <MembershipList memberships={memberships} />
        </>
      );
  }

  return <div className="App">{displayMembership}</div>;
}

export default App;
