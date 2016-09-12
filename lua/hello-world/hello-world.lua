local exports = {}

function exports.hello(name) 
	local my_name = name or "world" 
	return "Hello, " .. my_name .. "!" 
end

return exports

