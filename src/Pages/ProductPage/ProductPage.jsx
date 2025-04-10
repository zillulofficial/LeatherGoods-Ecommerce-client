import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from "react-router-dom";
import { useState } from "react";
import ItemCard from "../../Components/ItemCard/ItemCard";

const ProductPage = () => {
    const tabs = ["Bags", "Shoes", "Pure Leather", "Other Items"];
    const { category } = useParams()
    const initialIndex = tabs.indexOf(category)
    const [activeTab, setActiveTab] = useState(initialIndex);

    const axiosSecure = useAxiosSecure()
    const { data: items = [] } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await axiosSecure.get('/items')
            return res.data
        }
    })

    const Bags = items?.filter(item => item.category === 'Bags')
    const Shoes = items?.filter(item => item.category === 'Shoes')
    const Leather = items?.filter(item => item.category === 'Pure Leather')
    const Others = items?.filter(item => item.category === 'Other Items')
    return (
        <div>
            <div className="bg-cover bg-no-repeat md:h-[500px] h-[300px] bg-fixed bg-[url(https://i.postimg.cc/BZwydPWC/bg-9.jpg)] mb-24">
                <div className="h-full bg-black opacity-60">
                    <p className="flex drop-shadow-2xl h-full opacity-100 justify-center items-center text-white text-5xl md:text-9xl">Leather Collection</p>
                </div>

            </div>
            <div className='container lg:px-6 lg:py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col items-center justify-between mb-32'>
                <div>
                    <Tabs defaultIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                        <TabList className="flex justify-center gap-8 mb-6">
                            {tabs.map((tab, index) => (
                                <Tab
                                    key={index}
                                    className="relative uppercase pb-1 md:text-lg text-gray-500 cursor-pointer hover:text-[#0057B7] transition-colors ease-in mb-12"
                                    selectedClassName="text-primary border-b-2 border-primary"
                                >
                                    {tab}
                                </Tab>
                            ))}
                        </TabList>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {
                                    Bags?.map(items => <ItemCard key={items._id} items={items}></ItemCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {
                                    Shoes?.map(items => <ItemCard key={items._id} items={items}></ItemCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {
                                    Leather?.map(items => <ItemCard key={items._id} items={items}></ItemCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                                {
                                    Others?.map(items => <ItemCard key={items._id} items={items}></ItemCard>)
                                }
                            </div>
                        </TabPanel>

                    </Tabs>
                </div>


            </div>
        </div>
    );
};

export default ProductPage;