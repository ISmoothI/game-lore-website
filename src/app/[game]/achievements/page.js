import fs from "fs";
import path from "path";

import AchievementsPage from "@/app/[game]/achievements/achievements-page";
import NoAchievementsPage from "./no-achievements-page";

export async function generateStaticParams() {
    const filePath = path.join(process.cwd(), "public/data", "games.json");
    const file = fs.readFileSync(filePath, "utf8");
    const games = JSON.parse(file);

    return games.map(game => ({
        game: game.url,
    }));
}


export default async function AchievementsData({ params }) {
    const { game } = await params;

    const filePath = path.join(process.cwd(), "public/data", game, "trophies.json");
    const fileExists = fs.existsSync(filePath);

    if(!fileExists) {
        return <NoAchievementsPage />;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    return <AchievementsPage data={data} />;
}