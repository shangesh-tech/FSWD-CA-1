import React from "react";
import TeamMemberCard from "./components/TeamMemberCard";

const Teams = [
  {
    name: "shangesh",
    title: "Full stack Developer / Generative AI / Blockchain developer",
  },
  {
    name: "Elon Musk",
    title: "Marketing department",
  },
];
const App = () => {
  return (
    <div className=" my-42">
      <h1 className="text-3xl font-bold underline py-4 text-center">Team Showcase</h1>
      <TeamMemberCard key={1} name={Teams[0].name} title={Teams[0].title} />
      <TeamMemberCard key={2} name={Teams[1].name} title={Teams[1].name} />

      {/* {Teams.map((team, index) => {
        <div>
          <TeamMemberCard key={index} name={team.name} title={team.title} />
        </div>;
      })} */}
    </div>
  );
};

export default App;
