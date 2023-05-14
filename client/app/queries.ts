import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export const useLiveDataSubscription = () => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const websocket = new WebSocket("ws://localhost:8080");
        websocket.onopen = () => {
            console.log("connected");
        };
        websocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            queryClient.setQueryData(["data"], () => data);
            //const queryKey = [...data.entity, data.id].filter(Boolean)
            // queryClient.invalidateQueries({ queryKey })
        };

        return () => {
            websocket.close();
        };
    }, [queryClient]);
};

export const useDataQuery = () => {
    const queryClient = useQueryClient();

    return useQuery({
        queryKey: ["data"],
        initialData: [],
        queryFn: () => queryClient.getQueryData<Array<DataItem>>(["data"]),
    });
};
