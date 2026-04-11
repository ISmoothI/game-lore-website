import fs from "fs";
import path from "path";

import AchievementsPage from "@/app/[game]/achievements/achievements-page";

export async function generateStaticParams() {
    const dataDir = path.join(process.cwd(), "public/data");

    const games = fs.readdirSync(dataDir).filter((file) => {
        const fullPath = path.join(dataDir, file);

        return fs.statSync(fullPath).isDirectory();
    });


    return games.map((game) => ({ game }));
}


export default async function AchievementsData({ params }) {
    const { game } = await params;

    const filePath = path.join(process.cwd(), "public/data", game, "trophies.json");

    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    return <AchievementsPage data={data} />;
}