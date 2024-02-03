import { useEffect, useMemo } from 'react';

interface IBroadcastChannel<T> {
	channelName: string;
	messageHandler: (message: MessageEvent<T>) => void;
}

enum EVENT_TYPE {
	message = 'message',
}
export const useBroadcastChannel = <T>({
	channelName,
	messageHandler,
}: IBroadcastChannel<T>) => {
	const channel: BroadcastChannel = useMemo(
		() => new BroadcastChannel(channelName),
		[channelName],
	);
	const receiveChannel: BroadcastChannel = useMemo(
		() => new BroadcastChannel(channelName),
		[channelName],
	);

	const broadcast = (message: T): void => {
		channel.postMessage(message);
	};

	useEffect(() => {
		channel.addEventListener(EVENT_TYPE.message, messageHandler);
		receiveChannel.addEventListener(EVENT_TYPE.message, messageHandler);

		return (): void => {
			channel.removeEventListener(EVENT_TYPE.message, messageHandler);
			receiveChannel.removeEventListener(EVENT_TYPE.message, messageHandler);
		};
	}, [channel, receiveChannel, messageHandler]);

	return {
		broadcast,
	};
};
