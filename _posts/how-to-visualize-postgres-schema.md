@import "index.less"

[back to home](./index.html)

## How to visualize postgresql schema

[SchemaSpy](https://github.com/schemaspy/schemaspy) is tool that generates html & csv files to visualize and navigate a database.

This tutorial documents the steps for visualizing a postgresql database schema.

- Download the latest version jar file ([schemaspy-6.1.0.jar](https://github.com/schemaspy/schemaspy/releases/tag/v6.1.0)) for schemaspy.

- Download the postgres JDBC driver postgresql from [oracle](https://jdbc.postgresql.org/download.html), I've tried [postgresql-42.3.3.jar](https://jdbc.postgresql.org/download/postgresql-42.3.3.jar) without any issues.

- Install java, but not the latest version!

  - Unfortunately `schemaspy-6.1.0` uses a few java libraries that were dropped in java-14.

- Install [asdf](https://asdf-vm.com/guide/getting-started.html#_1-install-dependencies) which is a tool to install and manage multiple runtime versions.
  - `brew install asdf`
- Add the asdf [java plugin](https://github.com/halcyon/asdf-java).
  - `asdf plugin-add java https://github.com/halcyon/asdf-java.git`.
- Look for a compatible java version:

```bash
$ asdf list-all java | grep '\-13'
zulu-13.35.1019
zulu-13.35.1025
zulu-13.37.21
zulu-13.40.15
zulu-13.42.17
zulu-13.44.13
zulu-13.46.15
```

- Install one, and verify that you have the right java version.

```
$ asdf install java zulu-13.44.13
############################################################# 100%

$ ~/.asdf/installs/java/zulu-13.44.13/bin/java --version
openjdk 13.0.9 2021-10-19
OpenJDK Runtime Environment Zulu13.44+13-CA (build 13.0.9+3-MTS)
OpenJDK 64-Bit Server VM Zulu13.44+13-CA (build 13.0.9+3-MTS, mixed mode)
```

---

**The final step is to run schema spy to generate the visualizations:**

```bash
$ ~/.asdf/installs/java/zulu-13.44.13/bin/java -Xss4m -jar schemaspy-6.1.0.jar -t pgsql11 -dp /Users/amin/dev/schema/postgresql-42.3.3.jar -db testdb -u amin -o ./output -host localhost -imageformat svg -vizjs
```

- `-Xss4m` tells java to increase the stack size
  - it's useful to prevent stack overflow if your database is huge.
- `-jar schemaspy-6.1.0.jar` tells java to execute the schema-spy jar file.
- `-t pgsql11` is the database type, you can use this command to find the right db version:
  - `~/.asdf/installs/java/zulu-13.44.13/bin/java -jar schemaspy-6.1.0.jar -dbhelp`
- `-dp` is the full path to the JDBC driver, `postgresql-42.3.3.jar` in our case.
- `-db` is the database name, `-u` is the database user and `-host` is the database host
- `-imageformat svg -vizjs` is asking schema-spy to generate svg files using it's internal `visjs` library.

- And last but not least `-o`, the output folder
  - Once schema-spy generates finishes, open the `index.html` file in a browser.
