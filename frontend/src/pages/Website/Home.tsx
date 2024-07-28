import WebLayout from "../../layouts/WebLayout";
import BaseCard from '../../components/cards/BaseCard';
import CardWrapper from "../../components/CardWrapper";

export default function Home() {
    return (
        <WebLayout >
            <CardWrapper>
                <BaseCard />
                <BaseCard />
                <BaseCard />
                <BaseCard />
                <BaseCard />
            </CardWrapper>

            <CardWrapper className="mt-5" >

            </CardWrapper>
        </WebLayout>
    )
}
