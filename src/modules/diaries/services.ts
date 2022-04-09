import { DiaryEntry } from "../../types";
import diaryData from "./mocks/diares.json";

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): Array<DiaryEntry> => diaries;
