import React, { useEffect, useState } from "react";

import styles from "./Statistiques.module.scss";

import { Divider } from "@mui/material";
import EventChart from "./EventChart";
import axios from "axios";

interface Props {
  consultantId: string | undefined;
}

// const events = [
//   {
//     id: 1,
//     title: "Challenge 1",
//     startDate: new Date(2021, 9, 1),
//     endDate: new Date(2021, 9, 5),
//   },
//   {
//     id: 2,
//     title: "Challenge 2",
//     startDate: new Date(2021, 9, 6),
//     endDate: new Date(2021, 9, 10),
//   },
//   {
//     id: 3,
//     title: "Challenge 3",
//     startDate: new Date(2021, 10, 11),
//     endDate: new Date(2021, 10, 15),
//   },
// ];

// const formations = [
//   {
//     id: 1,
//     title: "formation 1",
//     startDate: new Date(2021, 9, 25),
//     endDate: new Date(2021, 10, 5),
//   },
//   {
//     id: 2,
//     title: "formation 2",
//     startDate: new Date(2021, 5, 6),
//     endDate: new Date(2021, 6, 10),
//   },
//   {
//     id: 3,
//     title: "formation 3",
//     startDate: new Date(2021, 10, 11),
//     endDate: new Date(2021, 10, 15),
//   },
// ];
const url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_URL_PROD
    : process.env.REACT_APP_URL_DEV;

export const Statistiques: React.FC<Props> = ({ consultantId }) => {
  const [events, setEvents] = useState<any>([]);
  const [formations, setFormations] = useState<any>([]);
  const [challenges, setChallenges] = useState<any>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(`${url}/consultant/${consultantId}/events`);
      if (res?.data?.events?.length > 0) {
        const fetchedEvents = res.data.events;
        console.log("fetchedEvents", fetchedEvents);
        const fetchedFormations = fetchedEvents.filter(
          (event: any) => event.type === "formation"
        );
        const fetchedChallenges = fetchedEvents.filter(
          (event: any) => event.type === "challenge"
        );
        setEvents(fetchedEvents);
        setFormations(fetchedFormations);
        setChallenges(fetchedChallenges);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Statistiques</div>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.title}>Statistiques globales</div>
          <img src="https://placehold.co/400" alt="Graph left" />
          <div className={styles.left_bottom}>
            <div className={styles.left_bottom_left}>Progression</div>

            <div className={styles.left_bottom_middle}>Efficacité</div>

            <div className={styles.left_bottom_right}>Adapation</div>
          </div>
        </div>

        <Divider orientation="vertical" variant="middle" flexItem />

        <div className={styles.right}>
          <div className={styles.title}>Participations</div>
          <img src="https://placehold.co/400" alt="Graph left" />
          <EventChart challenges={challenges} formations={formations} />
        </div>
      </div>
    </div>
  );
};

export default Statistiques;
