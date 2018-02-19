from flask import Flask
app = Flask(__name__)

@app.route('/')
def homepage():
    return """
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Retrospective</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="css/tasks.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="js/require.js" data-main="js/main-optimized.min.js"></script>
</head>

<body>
    <div class="jumbotron text-center">
        <h1>Retrospective</h1>
        <p>Please add your comments</p> 
        <button id="save-button">Save</button>
        <button id="cancel-button">Cancel</button>
    </div>
        
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <div class="row">
                    <div class="col-sm-8">
                        <h3>What went well</h3>
                    </div>
                    <div class="col-sm-4">
                        <img id="new-task-button" src="css/add-icon.png" alt="Add Icon" style="width:28px;height:28px;">
                    </div>
                </div>
                <ul class="list-group" id="task-list"></ul>
            </div>
            <div class="col-sm-4">
                <div class="row">
                    <div class="col-sm-8">
                        <h3>What did not go well</h3>
                    </div>
                    <div class="col-sm-4">
                        <img id="new-badIdea-button" src="css/add-icon.png" alt="Add Icon" style="width:28px;height:28px;">
                    </div>
                </div>
                <ul class="list-group" id="badIdea-list"></ul>
            </div>
            <div class="col-sm-4">
                <div class="row">
                    <div class="col-sm-8">
                        <h3>Action Items</h3>
                    </div>
                    <div class="col-sm-4">
                        <img id="new-actionItem-button" src="css/add-icon.png" alt="Add Icon" style="width:28px;height:28px;">
                    </div>
                </div>
                <ul class="list-group" id="actionItem-list"></ul>
            </div>
        </div>
    </div>
</body>
</html>
"""

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)

##from flask import Flask
##from flask import render_template
##from flask import jsonify
##
##import consulate
##import logging
##
##
### Need to do this for vue.js, have to allow for the markup delimeters
##class CustomFlask(Flask):
##    jinja_options = Flask.jinja_options.copy()
##    jinja_options.update(dict(
##        block_start_string='(%',
##        block_end_string='%)',
##        variable_start_string='((',
##        variable_end_string='))',
##        comment_start_string='(#',
##        comment_end_string='#)',
##    ))
##
### Setting up flask
##app = CustomFlask(__name__)
##app.config['DEBUG'] = False
##app.config['TESTING'] = False
##
### Only log errors and warnings
##log = logging.getLogger('werkzeug')
##log.setLevel(logging.WARNING)
##
##
### Probably shouldn't hard code this
##consul_host = 'clwpdvlcsl01.corp.pods.lcl'
### tuple of environments / friendly names that consul will separate applications on, and the order they should be in
##environments_tuple = [('LO', 'Logistics / Development', 1),
##                      ('DEV', 'Development', 1),
##                      ('IN', 'Integration', 2),
##                      ('REG', 'Regression / Staging', 3),
##                      ('STG', 'Staging', 3),
##                      ('UAT', 'User Acceptance', 4),
##                      ('TR', 'Training', 5),
##                      ('PRD', 'Production', 6)]
### This list contains all service names in consul
##global_service_list = []
##
##
##@app.route('/')
##def dashboard():
##    return render_template('index.html')
##
##
##@app.route('/health')
##def health_check():
##    return '', 200
##
##
##@app.route('/services')
##def services():
##    consul = consulate.Consul(host=consul_host, port=80, scheme='http')
##    environment_services = get_environment_services(consul)
##    populate_service_checks(consul, environment_services)
##    environment_services = sort_and_combine_environments(environment_services)
##    environment_services = sort_services(environment_services)
##    populate_items_passing(environment_services)
##    return jsonify(environment_services)
##
##
### This function will hit the consul api for all running applications, find those that correspond to the above
### environment list, and return back a list of environments with their applications
##def get_environment_services(consul):
##    service_id = 1
##    response = consul.catalog.services()[0]
##    environments_services = []
##    # For every service in the dictionary of found services
##    for service, tags in response.items():
##        # For every tag per service
##        for tag in tags:
##            # If we have a match on an environment we're interested in
##
##            tag_dict = {key: values for key, *values in environments_tuple}
##            if tag in tag_dict.keys():
##                # If we've never encountered the service before, add it to the ones to query for health
##                if service not in global_service_list:
##                    global_service_list.append(service)
##
##                name = [key for key in environments_tuple if key[0] == tag][0][1]
##                # If this is a new environment we're adding a service to, create the environment
##                if len(environments_services) == 0 or not any([item['Tag'] == tag for item in environments_services]):
##                    environments_services.append({'Tag': tag, 'Name': name, 'Order': tag_dict[tag][1], 'Services': []})
##
##                [env['Services'].append({'Name': service, 'Id': service_id, 'Selected': False, 'Checks': []})
##                    for env in environments_services if env['Name'] == name]
##                service_id += 1
##    return environments_services
##
##
##def sort_services(environments):
##    for environment in environments:
##        environment['Services'] = sorted(environment['Services'], key=lambda x: x['Name'].lower())
##    return environments
##
##
### This function will query consul for the service checks, and populate each service per tag with the data
##def populate_service_checks(consul, environments):
##    check_id = 1
##    for global_service in global_service_list:
##        # We have to get the check information from consul for each service
##        nodes = consul.health.service(global_service)
##        for environment in environments:
##            for service in environment['Services']:
##                if service['Name'] == global_service:
##                    matches = [node for node in nodes if node['Service']['Service'] == service['Name']
##                               and any(env == environment['Tag'] for env in node['Service']['Tags'])]
##                    put_check_in_node(check_id, environment, matches, service)
##
##
##def put_check_in_node(check_id, environment, matches, service):
##    for node in matches:
##        for check in node['Checks']:
##            check['Selected'] = False
##            check['CheckID'] = check_id
##            check_id += 1
##        if [tag == environment['Tag'] for tag in node['Service']['Tags']]:
##            service['Checks'] = service['Checks'] + node['Checks']
##
##
### Function that combines environments based on order # and sorts them in increasing order
##def sort_and_combine_environments(environments):
##    for environment in environments:
##        filter_list = [other for other in environments if environment['Order'] == other['Order']
##                       and environment['Tag'] != other['Tag']]
##        for item in filter_list:
##            environment['Services'] += item['Services']
##            environments.remove(item)
##    environments = sorted(environments, key=lambda x: x['Order'])
##    return environments
##
##
### This function will set the checks, services, and environments to passing or not
##def populate_items_passing(environments):
##    for environment in environments:
##        for service in environment['Services']:
##            for check in service['Checks']:
##                check['Passing'] = check['Status'] == 'passing'
##
##            service['Passing'] = all(check['Status'] == 'passing' for check in service['Checks'])
##
##        environment['Passing'] = all(service['Passing'] for service in environment['Services'])
##

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
