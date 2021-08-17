import React from "react";
import Link from "next/link";

import { useTranslation } from "react-i18next";

const TeamMember = (team) =>
  team.map(({ name, job, linkedin }) => {
    const { t } = useTranslation();
    return (
      <div className="col-lg-3 col-sm-6">
        <div className="team-item-area">
          <a href={`https://www.linkedin.com/in/${linkedin}/`} target="_blank">
            <div className="team-image">
              <img src={`/images/team/${name}.jpg`} alt={name} />
            </div>
            <div className="team-content">
              <h3>{name}</h3>
              <p className="mb-0">{job}</p>
              <p>{t(`teamEducation.${name}`)}</p>
            </div>
          </a>
        </div>
      </div>
    );
  });

const TeamCard = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: "Marcone",
      job: `Back-end 10+ ${t("years")}`,
      linkedin: "marconegledson",
    },
    {
      name: "Rubens",
      job: `Back-end 10+ ${t("years")}`,
      linkedin: "rubens-santos-9553b321",
    },
    {
      name: "Scotti",
      job: `Front-end 7+ ${t("years")}`,
      linkedin: "guilhermescotti",
    },
    {
      name: "Luiz",
      job: `Back-end 5+ ${t("years")}`,
      linkedin: "luizgmneto",
    },
  ];
  return (
    <section className="team-section pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>{t("team")}</span>
          <h3>{t("meetOurTeam")}</h3>
        </div>

        <div className="row">{TeamMember(team)}</div>
      </div>

      {/* Shape Images */}
      <div className="team-animation">
        <div className="shape-img1">
          <img src="/images/shape/7.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/9.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/7.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/9.png" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/9.png" alt="image" />
        </div>
      </div>
    </section>
  );
};

export default TeamCard;
