import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
	while(true) {
		await ns.hack(ns.args[0].toString());
	}
}