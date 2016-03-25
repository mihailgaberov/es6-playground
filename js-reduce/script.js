import fs from 'fs';

var output = fs.readFileSync('data.txt', 'utf8')
			.trim()
			.split('\n')
			.map(line => line.split('\t'))
			.reduce((records, line) => {
				records[line[0]] = records[line[0]] || [];
				records[line[0]].push({
					firstName: line[1],
					lastName: line[2],
					email: line[3],
					country: line[4]
				});

				return records;
			}, {});

console.log('output.stringify: ', JSON.stringify(output, null, 2));